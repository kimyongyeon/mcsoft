package com.pcs.heaven.Common.upload;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.multipart.MultipartFile;

import com.pcs.heaven.Common.util.PropUtil;

public class UploadFileUtil {

	private final Log logger = LogFactory.getLog(this.getClass()
			.getSimpleName());

	public List<HashMap<String, Object>> FileUpload(UploadFile uploadfile, String strtype) throws Exception {
		List<MultipartFile> files = uploadfile.getFiles();
		// success.jsp 로 보낼 파일 이름 저장
		List<HashMap<String, Object>> fileNames = new ArrayList<HashMap<String, Object>>();

		if (null != files && files.size() > 0) {
			for (MultipartFile multipartFile : files) {
				String fileName = multipartFile.getOriginalFilename();
				
				if(fileName != null && !fileName.equals("")) {
					
					HashMap mp = getFileReName(fileName);
					
					String strSaveFileName = (String)mp.get("filename");
					//String path = "D:/upload/" + fileName;
					String path = PropUtil.getProperty(strtype); 
					
					File filePath = new File(path);
					if (!filePath.exists())
					{
						boolean status = filePath.mkdirs();
					}
					
					path += strSaveFileName;
					int intFileSize = 0;
	
					File f = new File(path);
	
					multipartFile.transferTo(f);
	
					HashMap<String, Object> fileMap = new HashMap<String, Object>();
					fileMap.put("attach_org_name", fileName);
					fileMap.put("attach_save_name", strSaveFileName);
					fileMap.put("attach_save_ext", (String)mp.get("fileext"));
					fileMap.put("attach_file_size", f.length());
					fileNames.add(fileMap);
				}
			}
		}
		
		return fileNames;
	}

	public String getFileReName(String strOrgName, String strPreFix) {

		String strRtn = "";
		String strExt = "";

		int pos = strOrgName.lastIndexOf(".");
		strExt = strOrgName.substring(pos + 1);

		Double dbl = (Double) (Math.random() * 1000000) + 1;

		strRtn = strPreFix + "_" + dbl + "." + strExt;

		return strRtn;
	}
	
	public HashMap getFileReName(String strOrgName) {

		HashMap mp = new HashMap();
		String strRtn = "";
		String strExt = "";

		int pos = strOrgName.lastIndexOf(".");
		strExt = strOrgName.substring(pos + 1);

		Double dbl = (Double) (Math.random() * 1000000) + 1;

		strRtn = dbl + "." + strExt;

		mp.put("filename", strRtn);
		mp.put("fileext", strExt);
		return mp;
	}
}
