package com.pcs.heaven.Model;

import java.util.ArrayList;
import java.util.List;

public class CheckArray {
	
	private List delImgNo;
	private List checkArr;
	
	public CheckArray() {
		delImgNo = new ArrayList();
		checkArr = new ArrayList();
	}
	
	public List getDelImgNo() {
		return delImgNo;
	}
	public void setDelImgNo(List delImgNo) {
		this.delImgNo = delImgNo;
	}
	public List getCheckArr() {
		return checkArr;
	}
	public void setCheckArr(List checkArr) {
		this.checkArr = checkArr;
	}
}