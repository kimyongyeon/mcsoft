package com.pcs.heaven.Common.Dao;

import org.apache.ibatis.session.SqlSession;
import org.mybatis.spring.support.SqlSessionDaoSupport;

public class DefaultDaoAdapter extends SqlSessionDaoSupport{
	
	private SqlSession sqlSessionTemplete;
	private SqlSession sqlSessionTemplete2;
	
	public SqlSession getSqlSessionTemplete() {
		return sqlSessionTemplete;
	}
	public void setSqlSessionTemplete(SqlSession sqlSessionTemplete) {
		this.sqlSessionTemplete = sqlSessionTemplete;
	}
	public SqlSession getSqlSessionTemplete2() {
		return sqlSessionTemplete2;
	}
	public void setSqlSessionTemplete2(SqlSession sqlSessionTemplete2) {
		this.sqlSessionTemplete2 = sqlSessionTemplete2;
	}
	
	
}