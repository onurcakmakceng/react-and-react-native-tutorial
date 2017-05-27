package com.stock_market_webservice.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;


@Entity
@Table(name = "stock_record")
public class StockRecord implements Serializable {

    @Id
    @NotNull
    @Column(name = "timestamp", nullable = false)
    private Date timestamp;

    @Id
    @NotNull
    @Column(name = "stock_name", nullable = false)
    private String stockName;

    @NotNull
    @Column(name = "lot_count", nullable = false)
    private long lotCount;

    @NotNull
    @Column(name = "lot_value", nullable = false)
    private float lotValue;

    @NotNull
    @Column(name = "total_value", nullable = false)
    private double totalValue;

    public StockRecord(){
    }

    public StockRecord(Date timestamp, String stockName, long lotCount, float lotValue) {
        this.timestamp = timestamp;
        this.stockName = stockName;
        this.lotCount = lotCount;
        this.lotValue = lotValue;
        this.totalValue = lotCount * lotValue;
    }

    public Date getTimestamp() { return timestamp; }
    public void setTimestamp(Date timestamp) { this.timestamp = timestamp; }

    public String getStockName() { return stockName; }
    public void setStockName(String stockName) { this.stockName = stockName; }

    public long getLotCount() {
        return lotCount;
    }
    public void setLotCount(long lotCount) {
        this.lotCount = lotCount;
    }

    public float getLotValue() {
        return lotValue;
    }
    public void setLotValue(float lotValue) {
        this.lotValue = lotValue;
    }

    public double getTotalValue() {
        return totalValue;
    }
    public void setTotalValue(double totalValue) {
        this.totalValue = totalValue;
    }
}
