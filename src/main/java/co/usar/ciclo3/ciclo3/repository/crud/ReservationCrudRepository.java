package co.usar.ciclo3.ciclo3.repository.crud;

import co.usar.ciclo3.ciclo3.model.Reservation;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;

public interface ReservationCrudRepository extends CrudRepository<Reservation, Integer> {

    @Query("SELECT c.machine, COUNT(c.machine) FROM Reservation AS c GROUP BY c.machine ORDER BY COUNT(c.machine) DESC")

    //*Report Total Reservations
    public List<Object[]> countTotalReservationsByMachine();

    @Query("SELECT c.client, COUNT(c.client) FROM Reservation AS c GROUP BY c.client ORDER BY COUNT(c.client) DESC"  )

    //*Report Total Reservations by Client
    public List<Object[]> countTotalReservationsByClient();

    //*Report between Dates (Start - Devolution)
    public List<Reservation> findAllByStartDateAfterAndDevolutionDateBefore(Date dateOne, Date dateTwo);

    //* Report by Reservation Status (Completed or Cancelled )
    public List<Reservation> findAllByStatus(String status);
}
