package co.usar.ciclo3.ciclo3.model.Report;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class StatusAmount {
    private int completed;
    private int cancelled;

    public StatusAmount(int completed, int cancelled) {
        this.completed = completed;
        this.cancelled = cancelled;
    }
}