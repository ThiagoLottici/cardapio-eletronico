package com.example.myfirstapp;

import android.content.Context;
import android.os.AsyncTask;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.TextView;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONStringer;
import org.json.JSONObject;
import org.json.JSONTokener;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Thiago on 05/10/2016.
 */
public class RetrievePedidosTask extends AsyncTask<Void, Void, String> {

    private Exception exception;
    public MainActivity activity;
    Gson gson = new Gson();
    ProgressBar progressBar;
    TextView responseView;

    public RetrievePedidosTask(MainActivity main)
    {
        this.activity = main;
        progressBar = (ProgressBar) activity.findViewById(R.id.progressBar);
        responseView = (TextView) activity.findViewById(R.id.responseView);
    }

    protected void onPreExecute() {

        progressBar.setVisibility(View.VISIBLE);
        responseView.setText("");
    }

    protected String doInBackground(Void... urls ) {

        try {
            URL url = new URL("http://cardapio-eletronico-server.herokuapp.com/pedidos");
            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
            try {
                BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
                StringBuilder stringBuilder = new StringBuilder();
                String line;
                while ((line = bufferedReader.readLine()) != null) {
                    stringBuilder.append(line).append("\n");
                }
                bufferedReader.close();
                return stringBuilder.toString();

            }
            finally{
                urlConnection.disconnect();
            }
        }
        catch(Exception e) {
            Log.e("ERROR", e.getMessage(), e);
            return null;
        }
    }

    protected void onPostExecute(String response) {
        if(response == null) {
            response = "THERE WAS AN ERROR";
        }
        try {
            JSONObject mPedidos = new JSONObject(response);
            JSONArray pedidosList = mPedidos.getJSONArray("pedidos");

            activity.pedidosArray = gson.fromJson(pedidosList.toString(), new TypeToken<List<Pedido>>(){}.getType());
            String ret = "";
            for (Pedido p : activity.pedidosArray) {
                ret = ret + p.getID() + " " + p.getCriacao()+ " " + p.getStatus() + "\n";
            }
            progressBar.setVisibility(View.GONE);
            Log.i("INFO", ret);
            responseView.setText(ret);
        } catch (JSONException e)
        {
            
        }
    }
}
