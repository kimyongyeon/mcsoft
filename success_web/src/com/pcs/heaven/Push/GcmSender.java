package com.pcs.heaven.Push;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.google.android.gcm.server.Message;
import com.google.android.gcm.server.Message.Builder;
import com.google.android.gcm.server.MulticastResult;
import com.google.android.gcm.server.Result;
import com.google.android.gcm.server.Sender;

public class GcmSender {
	
	public void SendMessage() throws IOException {
		Sender sender = new Sender("AIzaSyCZMZM3gACrTHYRN1nrnRyv0wqQteGG78E");
		
		boolean SHOW_ON_IDLE = false;    //기기가 활성화 상태일때 보여줄것인지
		int LIVE_TIME = 1800;  //이건 시간이 아니고 초를 의미..
		int RETRY = 3;  //메시지 전송실패시 재시도 횟수
		
		
		Message message = new Message.Builder()
		
        .collapseKey("collapseKey" + System.currentTimeMillis()) //주석막음
        .timeToLive(3)
		.delayWhileIdle(SHOW_ON_IDLE)        
        .timeToLive(LIVE_TIME)
        .addData("test","PUSH!!!!")        
        .build();
		
		List<String> list = new ArrayList<String>();
		MulticastResult result = sender.send(message, list, RETRY);
		

		//MulticastResult result = sender.send(message,regid,RETRY);
		
	}
	
}