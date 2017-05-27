package com.stock_market_webservice.dto;

import com.stock_market_webservice.model.StockRecord;

import java.io.Serializable;


public class StockRecordDTO implements Serializable {

    private StockRecord stockRecord;

    private int lastLotValueChange;

    public StockRecordDTO(){

    }

    public StockRecordDTO(StockRecord stockRecord, int lastLotValueChange){
        this.setStockRecord(stockRecord);
        this.setLastLotValueChange(lastLotValueChange);
    }

    public StockRecord getStockRecord() {
        return stockRecord;
    }

    public void setStockRecord(StockRecord stockRecord) {
        this.stockRecord = stockRecord;
    }

    public int getLastLotValueChange() {
        return lastLotValueChange;
    }

    public void setLastLotValueChange(int lastLotValueChange) {
        this.lastLotValueChange = lastLotValueChange;
    }
}
