package com.stock_market_webservice.dao;

import com.stock_market_webservice.model.StockRecord;

import java.util.List;

public interface StockRecordDAO {
    List<StockRecord> getAllRecordsOfStock(String stockName);
    List<StockRecord> getLastRecordsOfAllStocks(int stockCount);
}
