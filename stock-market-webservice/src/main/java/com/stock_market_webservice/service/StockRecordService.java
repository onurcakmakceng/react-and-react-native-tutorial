package com.stock_market_webservice.service;

import com.stock_market_webservice.dto.StockRecordDTO;
import com.stock_market_webservice.model.StockRecord;

import java.util.List;

public interface StockRecordService {
    List<StockRecord> getAllRecordsOfStock(String stockName);
    List<StockRecordDTO> getLastRecordsOfAllStocks();
}
