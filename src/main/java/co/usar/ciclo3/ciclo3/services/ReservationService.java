package co.usar.ciclo3.ciclo3.services;

import co.usar.ciclo3.ciclo3.model.Report.CountClient;
import co.usar.ciclo3.ciclo3.model.Report.StatusAmount;
import co.usar.ciclo3.ciclo3.model.Reservation;
import co.usar.ciclo3.ciclo3.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public List<Reservation> getAll(){
        return reservationRepository.getAll();
    }
    public Optional<Reservation> getReservation(int id){
        return reservationRepository.getReservation(id);
    }
    public Reservation save(Reservation res){
        Integer id = res.getIdReservation();
        if(id==null){
            return reservationRepository.save(res);
        } else {
            Optional<Reservation> resaux=reservationRepository.getReservation(res.getIdReservation());
            if (resaux.isEmpty()){
                return reservationRepository.save(res);
            } else {
                return res;
            }
        }
    }

    public Reservation update(Reservation res){
        Integer id = res.getIdReservation();
        if(id != null){
            Optional<Reservation> resaux = reservationRepository.getReservation(res.getIdReservation());
            if(!resaux.isEmpty()){
                if(res.getStartDate() != null){
                    resaux.get().setStartDate(res.getStartDate());
                }
                if(res.getDevolutionDate() != null){
                    resaux.get().setDevolutionDate(res.getDevolutionDate());
                }
                if(res.getStatus() != null){
                    resaux.get().setStatus(res.getStatus());
                }
                reservationRepository.save(resaux.get());
                return  resaux.get();
            } else {
                return res;
            }
        } else {
            return res;
        }
    }

    public boolean delete(int idClient){
        boolean res = getReservation(idClient).map(reservation -> {
            reservationRepository.delete(reservation);
            return true;
        }).orElse(false);
        return res;
    }

    //* Reports

   //* Report Top Client
    public List<CountClient> getTopClients (){
        return reservationRepository.getTopClients();
    }

    public StatusAmount getReservationStatusReport(){
        List<Reservation>completed=reservationRepository.getReservationsByStatus("completed");
        List<Reservation>cancelled=reservationRepository.getReservationsByStatus("cancelled");
        return  new StatusAmount(completed.size(),cancelled.size());
    }

    //* Report between dates
    public List<Reservation> getReservationsPeriod(String dateA, String dateB){
        SimpleDateFormat parser = new SimpleDateFormat("YYYY-MM-DD");
        Date a = new Date();
        Date b = new Date();
        try {
            a = parser.parse(dateA);
            a = parser.parse(dateB);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        if (a.before(b)){
            return reservationRepository.getReservationPeriod(a,b);
        } else {
            return new ArrayList<>();
        }
    }


}