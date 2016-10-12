package com.example.myfirstapp;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    public ArrayList<Pedido> pedidosArray;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        initializeAttributes();
        setContentView(R.layout.activity_main);
        RetrievePedidosTask myTask = new RetrievePedidosTask(this);
        myTask.execute();

    }

    private void initializeAttributes() {
        pedidosArray = new ArrayList<Pedido>();
    }
}
