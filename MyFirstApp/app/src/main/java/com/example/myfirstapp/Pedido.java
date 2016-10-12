package com.example.myfirstapp;

import java.util.ArrayList;
import java.util.Date;

/**
 * Created by Thiago on 12/10/2016.
 */
public class Pedido {
    private int ID;
    private Date criacao;
    private int status;
    private ArrayList<Integer> pratos;

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public Date getCriacao() {
        return criacao;
    }

    public void setCriacao(Date criacao) {
        this.criacao = criacao;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public ArrayList<Integer> getPratos() {
        return pratos;
    }

    public void setPratos(ArrayList<Integer> pratos) {
        this.pratos = pratos;
    }
}
