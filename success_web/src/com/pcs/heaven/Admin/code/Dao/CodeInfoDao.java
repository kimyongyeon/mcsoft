package com.pcs.heaven.Admin.code.Dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


public interface CodeInfoDao {
        /**
         * main
         */
	public List<Map> getCodeMainList(Map<String, Object> param);
	public HashMap getCodeMainNextCd(Map<String, Object> param);
	public HashMap getCodeMainInfo(Map<String, Object> param);
	public int insertInfoCodeMain(Map<String, Object> param);
	public int updateInfoCodeMain(Map<String, Object> param);
	public int deleteInfoCodeMain(Map<String, Object> param);
	
	/**
     * middle
     */
    public List<Map> getCodeMiddleList(Map<String, Object> param);
    public HashMap getCodeMiddleNextCd(Map<String, Object> param);
    public HashMap getCodeMiddleInfo(Map<String, Object> param);
    public int insertInfoCodeMiddle(Map<String, Object> param);
    public int updateInfoCodeMiddle(Map<String, Object> param);
    public int deleteInfoCodeMiddle(Map<String, Object> param);
    
    /**
     * small
     */
    public List<Map> getCodeSmallList(Map<String, Object> param);
    public HashMap getCodeSmallNextCd(Map<String, Object> param);
    public HashMap getCodeSmallInfo(Map<String, Object> param);
    public int insertInfoCodeSmall(Map<String, Object> param);
    public int updateInfoCodeSmall(Map<String, Object> param);
    public int deleteInfoCodeSmall(Map<String, Object> param);
}