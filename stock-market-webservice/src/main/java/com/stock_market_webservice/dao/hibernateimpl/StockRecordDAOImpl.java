package com.stock_market_webservice.dao.hibernateimpl;

import com.stock_market_webservice.dao.StockRecordDAO;
import com.stock_market_webservice.model.StockRecord;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.Query;
import java.util.List;

@Repository
public class StockRecordDAOImpl implements StockRecordDAO {

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public List<StockRecord> getAllRecordsOfStock(String stockName) {
        Query query;
        List<StockRecord> stockRecordList;
        try {
            query = sessionFactory.getCurrentSession().createQuery("FROM StockRecord SR WHERE SR.stockName = :stockName");
            query.setParameter("stockName",stockName);
            //(List<StockRecord>)
            stockRecordList = query.getResultList();
        } catch (Exception e) {
            sessionFactory.getCurrentSession().clear();
            return null;
        }
        return stockRecordList;
    }

    @Override
    public List<StockRecord> getLastRecordsOfAllStocks(int stockCount) {
        Query query = sessionFactory.getCurrentSession().createQuery("FROM StockRecord SR ORDER BY SR.timestamp DESC");
        query.setMaxResults(stockCount * 2);
        return (List<StockRecord>) query.getResultList();
    }
}
