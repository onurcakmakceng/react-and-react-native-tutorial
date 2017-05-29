package com.stock_market_webservice.dto;

import com.stock_market_webservice.model.StockRecord;

import java.io.Serializable;


public class StockRecordDTO implements Serializable {

    private StockRecord stockRecord;

    private String lastLotValueChange;

    public StockRecordDTO(){

    }

    public StockRecordDTO(StockRecord stockRecord, String lastLotValueChange){
        this.setStockRecord(stockRecord);
        this.setLastLotValueChange(lastLotValueChange);
    }

    public StockRecord getStockRecord() {
        return stockRecord;
    }

    public void setStockRecord(StockRecord stockRecord) {
        this.stockRecord = stockRecord;
    }

    public String getLastLotValueChange() {
        return lastLotValueChange;
    }

    public void setLastLotValueChange(String lastLotValueChange) {
        this.lastLotValueChange = lastLotValueChange;
    }
}
