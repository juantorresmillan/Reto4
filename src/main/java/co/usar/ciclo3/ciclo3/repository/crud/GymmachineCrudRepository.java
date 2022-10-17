package co.usar.ciclo3.ciclo3.repository.crud;

import co.usar.ciclo3.ciclo3.model.Gymmachine;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface GymmachineCrudRepository extends CrudRepository<Gymmachine, Integer> {

    @Query("SELECT c.year, COUNT(c.year) from Gymmachine AS c group by c.year order by COUNT(c.year) DESC")
    public List<Object[]> countTotalMachinesByYear();

}
