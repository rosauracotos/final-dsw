package com.example.finaldsw.entidad;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import java.util.Objects;

@Entity
public class Boleto {

    private @Id @GeneratedValue Long id;

    @ManyToOne()
    @JoinColumn(name = "id_pelicula")
    private Pelicula pelicula;

    @ManyToOne()
    @JoinColumn(name = "id_cliente")
    private Cliente cliente;

    private String posicion;

    public Boleto() {
    }

    public Boleto(Pelicula pelicula, Cliente cliente, String posicion) {
        this.pelicula = pelicula;
        this.cliente = cliente;
        this.posicion = posicion;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Pelicula getPelicula() {
        return pelicula;
    }

    public void setPelicula(Pelicula pelicula) {
        this.pelicula = pelicula;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public String getPosicion() {
        return posicion;
    }

    public void setPosicion(String posicion) {
        this.posicion = posicion;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Boleto boleto = (Boleto) o;
        return Objects.equals(id, boleto.id) && Objects.equals(pelicula, boleto.pelicula) && Objects.equals(cliente, boleto.cliente) && Objects.equals(posicion, boleto.posicion);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, pelicula, cliente, posicion);
    }
}
