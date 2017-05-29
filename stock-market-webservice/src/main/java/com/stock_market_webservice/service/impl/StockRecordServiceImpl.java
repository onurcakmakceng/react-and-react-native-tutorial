package com.stock_market_webservice.service.impl;

import com.stock_market_webservice.dao.StockRecordDAO;
import com.stock_market_webservice.dto.StockRecordDTO;
import com.stock_market_webservice.model.StockRecord;
import com.stock_market_webservice.service.StockRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Transactional
@Service
public class StockRecordServiceImpl implements StockRecordService{

    @Autowired
    private StockRecordDAO stockRecordDAO;

    private int stockCount;

    public StockRecordServiceImpl() {
        stockCount = 5;
    }

    @Override
    public List<StockRecord> getAllRecordsOfStock(String stockName) {
        return stockRecordDAO.getAllRecordsOfStock(stockName);
    }

    @Override
    public List<StockRecordDTO> getLastRecordsOfAllStocks() {
        List<StockRecord> stockRecordList = stockRecordDAO.getLastRecordsOfAllStocks(this.stockCount);
        List<StockRecordDTO> stockRecordDTOList = new ArrayList<StockRecordDTO>();
        for(int i = 0; i < this.stockCount; ++i) {
            if(stockRecordList.size() > this.stockCount && stockRecordList.get(i).getLotValue() != stockRecordList.get(i + this.stockCount).getLotValue()) {
                // Put object and +1 if last lotValue bigger then, else put object and -1 to map.
                StockRecordDTO stockRecordDTO = new StockRecordDTO(stockRecordList.get(i), (stockRecordList.get(i).getLotValue() > stockRecordList.get(i + this.stockCount).getLotValue()? "↑": "↓") );
                stockRecordDTOList.add(stockRecordDTO);
            } else {
                StockRecordDTO stockRecordDTO = new StockRecordDTO(stockRecordList.get(i), "↔" );
                stockRecordDTOList.add(stockRecordDTO);
            }

        }
        return stockRecordDTOList;
    }

}
