package co.usar.ciclo3.ciclo3.model.Report;

import co.usar.ciclo3.ciclo3.model.Gymmachine;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class CountMachine {
    private Long total;
    private Gymmachine machine;

    public CountMachine(Long aLong, Gymmachine machine) {
    }
}