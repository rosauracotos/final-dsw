package com.example.finaldsw.components;

import com.example.finaldsw.entidad.Boleto;
import com.example.finaldsw.entidad.Cliente;
import com.example.finaldsw.entidad.Pelicula;
import com.example.finaldsw.repository.BoletoRepository;
import com.example.finaldsw.repository.ClienteRepository;
import com.example.finaldsw.repository.PeliculaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final PeliculaRepository peliculaRepository;
    private final ClienteRepository clienteRepository;
    private final BoletoRepository boletoRepository;

    @Autowired
    public DatabaseLoader(PeliculaRepository peliculaRepository, ClienteRepository clienteRepository, BoletoRepository boletoRepository) {
        this.peliculaRepository = peliculaRepository;
        this.clienteRepository = clienteRepository;
        this.boletoRepository = boletoRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        Pelicula pelicula1 = new Pelicula("Barbie");
        Pelicula pelicula2 = new Pelicula("Transformes");
        Pelicula pelicula3 = new Pelicula("Avengers");
        Pelicula pelicula4 = new Pelicula("Rapidos y Furiosos");

        this.peliculaRepository.save(pelicula1);
        this.peliculaRepository.save(pelicula2);
        this.peliculaRepository.save(pelicula3);
        this.peliculaRepository.save(pelicula4);

        Cliente cliente1 = new Cliente("Rosa Cotos");
        Cliente cliente2 = new Cliente("Juan Cotos");

        this.clienteRepository.save(cliente1);
        this.clienteRepository.save(cliente2);

        Boleto boleto1 = new Boleto(pelicula1, cliente1, "A12");
        Boleto boleto4 = new Boleto(pelicula1, cliente2, "A11");
        Boleto boleto2 = new Boleto(pelicula2, cliente2, "B1");
        Boleto boleto3 = new Boleto(pelicula3, cliente1, "J4");

        this.boletoRepository.save(boleto1);
        this.boletoRepository.save(boleto2);
        this.boletoRepository.save(boleto3);
        this.boletoRepository.save(boleto4);

    }
}
