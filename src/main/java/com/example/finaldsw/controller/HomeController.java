package com.example.finaldsw.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
public class HomeController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }

    @GetMapping(path = "/api/boletos/todos")
    public @ResponseBody List<Map <String, Object>> todosBoletos(){
        String sql = "SELECT pelicula.id as PELICULAID, pelicula.nombre as PELICULA, count(boleto.posicion) AS CANTIDADBOLETOS FROM pelicula LEFT JOIN boleto ON boleto.id_pelicula=pelicula.id GROUP BY pelicula.id";
        List<Map <String, Object>> queryResult = jdbcTemplate.queryForList(sql);
        return queryResult;
    }

    @GetMapping(path = "/api/boletos/{id}/clientespelicula")
    public @ResponseBody List<Map <String, Object>> clientesPorPelicula(@PathVariable Integer id){
        String sql = "SELECT boleto.id as ID, cliente.nombre as CLIENTE, boleto.posicion as ASIENTO FROM boleto JOIN pelicula ON boleto.id_pelicula=pelicula.id JOIN cliente ON boleto.id_cliente=cliente.id WHERE pelicula.id = ?";
        List<Map <String, Object>> queryResult = jdbcTemplate.queryForList(sql, id);
        return queryResult;
    }

}
