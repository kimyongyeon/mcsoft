package com.pcs.heaven.Common.upload;

public class FileValidator {
	private String strTest;

	public String getStrTest() {
		return strTest;
	}

	public void setStrTest(String strTest) {
		this.strTest = strTest;
	}
	
	
}

/*import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

public class FileValidator implements Validator {
 @Override
 public boolean supports(Class<?> arg0) {
  // TODO Auto-generated method stub
  return false;
 }
 
 @Override
 public void validate(Object uploadFile, Errors errors) {
	 UploadFile file = (UploadFile) uploadFile;  
	 if (file.getFile().getSize() == 0) {  
		 errors.rejectValue("file", "uploadForm.salectFile","Please select a file!");  
	 }
 }
}
*/