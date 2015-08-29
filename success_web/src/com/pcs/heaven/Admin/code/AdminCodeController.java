package com.pcs.heaven.Admin.code;

import java.util.HashMap;
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
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import com.pcs.heaven.Admin.code.Dao.CodeInfoDaoImpl;
import com.pcs.heaven.Param.RequestParam;

@Controller
public class AdminCodeController {
	
        private final Log logger = LogFactory.getLog(this.getClass().getSimpleName());
		
        @Resource(name="codeInfoDaoImpl")
        private CodeInfoDaoImpl codeInfoDaoImpl;
        
        /**
         * 코드목록 main
         * @param reqMap
         * @param model
         * @param request
         * @param response
         * @param handler
         * @return
         */
	@RequestMapping(value="/admin/code/List")
	public ModelAndView menuMainList(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

	        String strAction = "/Admin/code/List";
                ModelAndView mav = new ModelAndView(strAction);
		List<Map> list = this.codeInfoDaoImpl.getCodeMainList(reqMap.getParameter());
		
		mav.addObject("main_code_list", list);
		        
		return mav;
	}
	
	/**
	 * 코드등록폼 main
	 * @param reqMap
	 * @param model
	 * @param request
	 * @param response
	 * @param handler
	 * @return
	 */
	@RequestMapping(value="/admin/code/Form")
        public ModelAndView menuMainForm(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "/Admin/code/Form";
                ModelAndView mav = new ModelAndView(strAction);
                                        
                return mav;
        }


	/**
	 * 코드정보 main
	 * @param reqMap
	 * @param model
	 * @param request
	 * @param response
	 * @param handler
	 * @return
	 */
        @RequestMapping(value="/admin/code/Info")
        public ModelAndView menuMainView(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "/Admin/code/Info";
                ModelAndView mav = new ModelAndView(strAction);
                
                HashMap hm = this.codeInfoDaoImpl.getCodeMainInfo(reqMap.getParameter());                
                mav.addObject("main_code_info", hm);
                
                List<Map> middle_code_list = this.codeInfoDaoImpl.getCodeMiddleList(hm);
                mav.addObject("middle_code_list", middle_code_list);
                
                return mav;
        }
        
        /**
         * 코드등록 main
         * @param reqMap
         * @param model
         * @param request
         * @param response
         * @param handler
         * @return
         */
        @RequestMapping(value="/admin/code/Insert")
        public ModelAndView menuMainInsert(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "redirect:/admin/code/List.do";
                ModelAndView mav = new ModelAndView(strAction);
                
                HashMap hm = this.codeInfoDaoImpl.getCodeMainNextCd(reqMap.getParameter());
                
                if(hm != null && hm.size() > 0) {
                    String strNextCd = String.valueOf(hm.get("nextcd"));
                    reqMap.set("main_cd", strNextCd);
                    this.codeInfoDaoImpl.insertInfoCodeMain(reqMap.getParameter());
                }
                
                
                return mav;
        }
        
        /**
         * 코드수정 main
         * @param reqMap
         * @param model
         * @param request
         * @param response
         * @param handler
         * @return
         */
        @RequestMapping(value="/admin/code/Update")
        public ModelAndView menuMainUpdate(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "redirect:/admin/code/List.do";
                ModelAndView mav = new ModelAndView(strAction);                                    
                this.codeInfoDaoImpl.updateInfoCodeMain(reqMap.getParameter());
                
                return mav;
        }
        
        /**
         * 코드삭제 main
         * @param reqMap
         * @param model
         * @param request
         * @param response
         * @param handler
         * @return
         */
        @RequestMapping(value="/admin/code/Delete")
        public ModelAndView menuMainDelete(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "redirect:/admin/code/List.do";
                ModelAndView mav = new ModelAndView(strAction);                                    
                this.codeInfoDaoImpl.deleteInfoCodeMain(reqMap.getParameter());
                
                return mav;
        }
        
        
        /***
         * middle start
         */
        /**
         * 코드등록폼 middle
         * @param reqMap
         * @param model
         * @param request
         * @param response
         * @param handler
         * @return
         */
        @RequestMapping(value="/admin/code/middleForm")
        public ModelAndView menuMiddleForm(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "/Admin/code/middleForm";
                ModelAndView mav = new ModelAndView(strAction);
                HashMap hm = this.codeInfoDaoImpl.getCodeMainInfo(reqMap.getParameter());                
                mav.addObject("main_code_info", hm);            
                
                return mav;
        }
        
        /**
         * 코드등록 middle
         * @param reqMap
         * @param model
         * @param request
         * @param response
         * @param handler
         * @return
         */
        @RequestMapping(value="/admin/code/middleInsert")
        public ModelAndView menuMiddleInsert(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler, RedirectAttributes redirectAttributes) {

                String strAction = "redirect:/admin/code/Info.do";                
                
                HashMap hm = this.codeInfoDaoImpl.getCodeMiddleNextCd(reqMap.getParameter());                
                if(hm != null && hm.size() > 0) {
                    String strNextCd = String.valueOf(hm.get("nextcd"));
                    reqMap.set("main_cd", reqMap.get("main_cd"));
                    reqMap.set("middle_cd", strNextCd);
                    this.codeInfoDaoImpl.insertInfoCodeMiddle(reqMap.getParameter());
                }
                                            
                redirectAttributes.addAttribute("main_cd", reqMap.get("main_cd"));
                ModelAndView mav = new ModelAndView(strAction);
                
                return mav;
        }
        
        /**
         * 코드정보 middle
         * @param reqMap
         * @param model
         * @param request
         * @param response
         * @param handler
         * @return
         */
        @RequestMapping(value="/admin/code/middleInfo")
        public ModelAndView menuMiddleView(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "/Admin/code/middleInfo";
                ModelAndView mav = new ModelAndView(strAction);
                
                HashMap hm = this.codeInfoDaoImpl.getCodeMiddleInfo(reqMap.getParameter());                
                mav.addObject("middle_code_info", hm);
                
                List<Map> small_code_list = this.codeInfoDaoImpl.getCodeSmallList(hm);
                mav.addObject("small_code_list", small_code_list);
                
                return mav;
        }
        
        /**
         * 코드정보수정 middle
         * @param reqMap
         * @param model
         * @param request
         * @param response
         * @param handler
         * @param redirectAttributes
         * @return
         */
        @RequestMapping(value="/admin/code/middleUpdate")
        public ModelAndView menuMiddleUpdate(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler, RedirectAttributes redirectAttributes) {

                String strAction = "redirect:/admin/code/Info.do";                
                
                this.codeInfoDaoImpl.updateInfoCodeMiddle(reqMap.getParameter());
                                            
                redirectAttributes.addAttribute("main_cd", reqMap.get("main_cd"));
                ModelAndView mav = new ModelAndView(strAction);
                
                return mav;
        }
        
        /***
         * small start
         */
        /**
         * 코드등록폼 small
         * @param reqMap
         * @param model
         * @param request
         * @param response
         * @param handler
         * @return
         */
        @RequestMapping(value="/admin/code/smallForm")
        public ModelAndView menuSmallForm(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "/Admin/code/smallForm";
                ModelAndView mav = new ModelAndView(strAction);
                HashMap hm = this.codeInfoDaoImpl.getCodeMiddleInfo(reqMap.getParameter());                
                mav.addObject("middle_code_info", hm);            
                
                return mav;
        }
        
        /**
         * 코드등록 small
         * @param reqMap
         * @param model
         * @param request
         * @param response
         * @param handler
         * @return
         */
        @RequestMapping(value="/admin/code/smallInsert")
        public ModelAndView menuSmallInsert(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler, RedirectAttributes redirectAttributes) {

                String strAction = "redirect:/admin/code/middleInfo.do";                
                
                HashMap hm = this.codeInfoDaoImpl.getCodeSmallNextCd(reqMap.getParameter());                
                if(hm != null && hm.size() > 0) {
                    String strNextCd = String.valueOf(hm.get("nextcd"));                    
                    reqMap.set("small_cd", strNextCd);
                    this.codeInfoDaoImpl.insertInfoCodeSmall(reqMap.getParameter());
                }
                                            
                redirectAttributes.addAttribute("main_cd", reqMap.get("main_cd"));
                redirectAttributes.addAttribute("middle_cd", reqMap.get("middle_cd"));
                ModelAndView mav = new ModelAndView(strAction);
                
                return mav;
        }
        
        /**
         * 코드정보 small
         * @param reqMap
         * @param model
         * @param request
         * @param response
         * @param handler
         * @return
         */
        @RequestMapping(value="/admin/code/smallInfo")
        public ModelAndView menuSmallView(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) {

                String strAction = "/Admin/code/smallInfo";
                ModelAndView mav = new ModelAndView(strAction);
                
                HashMap hm = this.codeInfoDaoImpl.getCodeSmallInfo(reqMap.getParameter());                
                mav.addObject("small_code_info", hm);
                                
                return mav;
        }
        
        /**
         * 코드정보수정 small
         * @param reqMap
         * @param model
         * @param request
         * @param response
         * @param handler
         * @param redirectAttributes
         * @return
         */
        @RequestMapping(value="/admin/code/smallUpdate")
        public ModelAndView menuSmallUpdate(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler, RedirectAttributes redirectAttributes) {

                String strAction = "redirect:/admin/code/middleInfo.do";                
                
                this.codeInfoDaoImpl.updateInfoCodeSmall(reqMap.getParameter());
                                            
                redirectAttributes.addAttribute("main_cd", reqMap.get("main_cd"));
                redirectAttributes.addAttribute("middle_cd", reqMap.get("middle_cd"));
                ModelAndView mav = new ModelAndView(strAction);
                
                return mav;
        }
        
}