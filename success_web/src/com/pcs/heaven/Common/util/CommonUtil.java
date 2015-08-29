package com.pcs.heaven.Common.util;

import java.util.HashMap;
import java.util.Map;


public class CommonUtil {

    public static final  int YEAR       = 1;
    public static final  int MONTH      = 2;
    public static final  int DATE       = 3;
    public static final  int MONTHFIRST = 4;
    public static final  int MONTHEND   = 5;
    
/**
 * 페이징 처리 
 * @param intPageRow
 * @param totalCount
 * @return
 */
public static HashMap<String, Object> calcPage(int intPageRow, int totalCount) {
        
        int intTotalPAge = 0;
        int intTest = 0;
        int intTotalCount = 0;
        intTotalCount = totalCount;
                
        HashMap<String, Object> rtnMap = new HashMap<String, Object>();
        if(intTotalCount <=  intPageRow) {
            intTotalPAge = 1;
        } else {
            intTest = intTotalCount%intPageRow;
            if(intTest > 0) {
                intTotalPAge = (intTotalCount/intPageRow)+1;
            } else {
                intTotalPAge = (intTotalCount/intPageRow);
            }
        }
        
        rtnMap.put("TOT_COUNT", intTotalCount);
        rtnMap.put("TOT_PAGE", intTotalPAge);
                
        return rtnMap;
    }
}