package com.pcs.heaven.Admin.postit.Dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


public interface PostItInfoDao {
	public List<Map> getList(Map<String, Object> param);
	public HashMap getNext(Map<String, Object> param);
	public HashMap getInfo(Map<String, Object> param);
	public int insertInfoPostIt(Map<String, Object> param);
	public int updateInfoPostIt(Map<String, Object> param);
	public int deleteInfoPostIt(Map<String, Object> param);
	
	/**
	 * file start
	 */
	public HashMap getFileNext(Map<String, Object> param);	
	public int insertInfoPostItFile(Map<String, Object> param);	
	public List<Map> getFileList(Map<String, Object> param);
	public HashMap getFileListOne(Map<String, Object> param);	
	public int deleteInfoPostItFile(Map<String, Object> param);
}