package co.usar.ciclo3.ciclo3.repository;

import co.usar.ciclo3.ciclo3.model.Client;
import co.usar.ciclo3.ciclo3.model.Reservation;
import co.usar.ciclo3.ciclo3.model.Report.CountClient;
import co.usar.ciclo3.ciclo3.repository.crud.ReservationCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public class ReservationRepository {
    @Autowired
    private ReservationCrudRepository reservationCrudRepository;

    public ReservationRepository() {
    }

    public List<Reservation> getAll() {
           return (List<Reservation>) reservationCrudRepository.findAll();
    }
    public Optional<Reservation> getReservation(int id) {
        return reservationCrudRepository.findById(id);
    }

    public Reservation save(Reservation res) {
        return reservationCrudRepository.save(res);
    }

    public void delete(Reservation res) {
        reservationCrudRepository.delete(res);
    }

    //* Reports:

    //*Report Total Reservations by Client
    public List <CountClient> getTopClients(){
        List <CountClient> res = new ArrayList<>();
        List <Object[]> report = reservationCrudRepository.countTotalReservationsByClient();
        for(int i= 0; i<report.size(); i++){
            res.add(new CountClient((Long) report.get(i)[1], (Client) report.get(i)[0] ));
        }
        return res;
    }

    //*Report between Dates (Start - Devolution)
    public List <Reservation> getReservationPeriod (Date a, Date b){
        return reservationCrudRepository.findAllByStartDateAfterAndStartDateBefore(a, b);
    }

    //* Report by Reservation Status (Completed or Cancelled)
    public List <Reservation> getReservationsByStatus (String status) {
        return reservationCrudRepository.findAllByStatus(status);
    }
}