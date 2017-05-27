package com.stock_market_webservice.controllers;

import com.stock_market_webservice.service.StockRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
public class StockRecordController {
    @Autowired
    private StockRecordService stockRecordService;

    @CrossOrigin
    @RequestMapping(value="/api/getAllRecordsOfStock/{stockName}", method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
    public ResponseEntity getAllRecordsOfStock(@PathVariable String stockName) {
        return ResponseEntity.status(HttpStatus.OK).body(stockRecordService.getAllRecordsOfStock(stockName) );
    }

    @CrossOrigin
    @RequestMapping(value="/api/getLastRecordsOfAllStocks", method = RequestMethod.GET, produces = "application/json;charset=UTF-8")
    public ResponseEntity getLastRecordsOfAllStocks() {
        return ResponseEntity.status(HttpStatus.OK).body(stockRecordService.getLastRecordsOfAllStocks() );
    }
}
