package com.nativemodule;

import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlAnchor;
import com.gargoylesoftware.htmlunit.html.HtmlButton;
import com.gargoylesoftware.htmlunit.html.HtmlElement;
import com.gargoylesoftware.htmlunit.html.HtmlForm;
import com.gargoylesoftware.htmlunit.html.HtmlPage;

import java.io.File;

public class AllegroSmartScraper implements Scraper {

	public String getDate() {
		WebClient client = new WebClient();
		client.getOptions().setCssEnabled(false);
		client.getOptions().setJavaScriptEnabled(false);
		try {
			/* logging part
			HtmlPage page = (HtmlPage) client.getPage("https://www.allegro.pl/login/auth?origin_url=%2F");
			System.out.println(page.asXml()); 
			HtmlForm form = (HtmlForm) page.getFirstByXPath("//form[@name='loginForm']");
			form.getInputByName("username").setValueAttribute("-"); 
			form.getInputByName("password").setValueAttribute("-");
			HtmlButton submitButton = form.getFirstByXPath("//button[@id'login-button']");
			page = submitButton.click();
			System.out.println(page.asText()); 	
			*/
			File file = new File("src/main/resources/websites/allegro.html");
			String path = file.getAbsolutePath();

			HtmlPage page2 = client.getPage("file:///"+path);
			HtmlElement lastBoughtItem = (HtmlElement) page2.getFirstByXPath("//div[@class='w1eai al110x xz3ls m1o1o']");
			
			System.out.println("Last bought: " + lastBoughtItem.asText());
			
			return lastBoughtItem.asText();
			
		}catch(Exception e){
		  e.printStackTrace();
		}
		return null;
	}
	
}