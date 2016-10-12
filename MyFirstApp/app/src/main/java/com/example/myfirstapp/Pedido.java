package com.example.myfirstapp;

import java.util.ArrayList;
import java.util.Date;

/**
 * Created by Thiago on 12/10/2016.
 */
public class Pedido {
    private Integer id;
    private String criacao;
    private Integer status;
    private ArrayList<Integer> pratos;

    public Integer getID() {
        return id;
    }

    public void setID(Integer ID) {
        this.id = ID;
    }

    public String getCriacao() {
        return criacao;
    }

    public void setCriacao(String criacao) {
        this.criacao = criacao;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public ArrayList<Integer> getPratos() {
        return pratos;
    }

    public void setPratos(ArrayList<Integer> pratos) {
        this.pratos = pratos;
    }
}
