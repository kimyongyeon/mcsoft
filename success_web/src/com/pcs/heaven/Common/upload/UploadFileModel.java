package com.pcs.heaven.Common.upload;

import java.io.Serializable;

public class UploadFileModel implements Serializable {
	
	private int board_seq;
	private int attach_seq;
	private String attach_org_name;
	private String attach_save_name;
	private long attach_file_size;
	
	public int getBoard_seq() {
		return board_seq;
	}
	public void setBoard_seq(int board_seq) {
		this.board_seq = board_seq;
	}
	public int getAttach_seq() {
		return attach_seq;
	}
	public void setAttach_seq(int attach_seq) {
		this.attach_seq = attach_seq;
	}
	public String getAttach_org_name() {
		return attach_org_name;
	}
	public void setAttach_org_name(String attach_org_name) {
		this.attach_org_name = attach_org_name;
	}
	public String getAttach_save_name() {
		return attach_save_name;
	}
	public void setAttach_save_name(String attach_save_name) {
		this.attach_save_name = attach_save_name;
	}
	public long getAttach_file_size() {
		return attach_file_size;
	}
	public void setAttach_file_size(long attach_file_size) {
		this.attach_file_size = attach_file_size;
	}
	
	
}