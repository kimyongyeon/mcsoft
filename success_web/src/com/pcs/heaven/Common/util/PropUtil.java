package com.pcs.heaven.Common.util;

import java.util.MissingResourceException;
import java.util.PropertyResourceBundle;

public class PropUtil {

	private static final String MOBILE_RESOURCE = "com.pcs.heaven.Common.util.MobileConfig";

	
	private static PropertyResourceBundle mobileProperty;

	/**
	 * Property File로부터 특정 Key값을 읽어들임<br>
	 * 
	 * @param key
	 *            찾고자하는 Key
	 * @return 찾고자하는 Key에 대응되는 값
	 */


	/**
	 * Property File을 찾는 함수 <br>
	 * 
	 * @param propertiesName
	 *            찾고자하는 Property File 이름
	 * @return 찾은 PropertyResourceBuldle 값
	 */
	public static PropertyResourceBundle readResources(String propertiesName) {

		try {

			PropertyResourceBundle m_properties = (PropertyResourceBundle) PropertyResourceBundle.getBundle(propertiesName);
			return m_properties;

		} catch (MissingResourceException e) {
			System.out.println("Cannot find properties file : "
					+ propertiesName + ".properties");
			throw new RuntimeException(
					"Fatal Error : resource bundle not found : "
							+ propertiesName);
		}

	}

	public static String getProperty(String PropertyId) throws MissingResourceException {

		Object obj = null;

		if (mobileProperty == null)
			mobileProperty = readResources(MOBILE_RESOURCE);

		obj = mobileProperty.getObject(PropertyId);

		if (obj == null) {
			System.out.println("Property '" + PropertyId + "' Not Defined");
			throw new MissingResourceException("No Define", MOBILE_RESOURCE, PropertyId);
		}

		if (obj != null)
			return obj.toString();
		else
			return null;
	}
}
