package com.pcs.heaven.Admin.client;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.pcs.heaven.Admin.menu.Dao.MenuInfoDaoImpl;
import com.pcs.heaven.Param.RequestParam;

@Controller
public class AdminClientController {
	
        private final Log logger = LogFactory.getLog(this.getClass().getSimpleName());
		
        @Resource(name="menuInfoDaoImpl")
        private MenuInfoDaoImpl menuInfoDaoImpl;
        
        @RequestMapping(value="/admin/client/List.do")
        public ModelAndView clientList(RequestParam reqMap, HttpServletRequest request, HttpServletResponse response, Object handler) {
            String strAction = "/Admin/client/List";
            ModelAndView mav = new ModelAndView(strAction);
            mav.addObject("a", "b");
                
            return mav;
        }
}