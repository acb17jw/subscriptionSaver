package com.nativemodule;

import java.io.File;
import java.util.List;

import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlAnchor;
import com.gargoylesoftware.htmlunit.html.HtmlButton;
import com.gargoylesoftware.htmlunit.html.HtmlElement;
import com.gargoylesoftware.htmlunit.html.HtmlForm;
import com.gargoylesoftware.htmlunit.html.HtmlInput;
import com.gargoylesoftware.htmlunit.html.HtmlPage;

public class NetflixScraper implements Scraper{


public String getDate() {
	WebClient client = new WebClient();
	client.getOptions().setCssEnabled(false);
	client.getOptions().setJavaScriptEnabled(false);
	try {
	
		/*
		HtmlPage page = (HtmlPage) client.getPage("https://www.netflix.com/pl/login");
		HtmlForm form = (HtmlForm) page.getFirstByXPath("//form[@class='login-form']");
		form.getInputByName("userLoginId").setValueAttribute("hube0x@gmail.com");
		form.getInputByName("password").setValueAttribute("Liwiaihubertnetflix2543");

		System.out.println("pass: "+ form.getInputByName("password").asText());
		HtmlButton submitButton = form.getFirstByXPath("//button[@data-uia='login-submit-button']");
		page = submitButton.click();
		System.out.println(page.asText());


		String searchUrl = "https://www.netflix.com/YourAccount";
		HtmlPage page2 = client.getPage(searchUrl);

		HtmlElement items =(HtmlElement) page2.getFirstByXPath("//li[@class='single-profile']") ;

		HtmlAnchor itemAnchor = ((HtmlAnchor) items.getFirstByXPath("//a[@data-uia='action-viewing-activity']")) ;

		String itemUrl =  itemAnchor.getHrefAttribute();

		System.out.println(itemUrl);

		HtmlPage page3 = client.getPage("https://www.netflix.com" + itemUrl);
		*/


		File file = new File("src/main/resources/websites/Netflix.html");
		String path = file.getAbsolutePath();


		HtmlPage page3 = client.getPage("file:///"+path);
		System.out.println(page3.asText());
		
		HtmlElement lastWatchedItem = (HtmlElement) page3.getFirstByXPath("//div[@class='col date nowrap']");
		
		System.out.println("Last watched: " + lastWatchedItem.asText());
		
		return lastWatchedItem.asText();
		
	}catch(Exception e){
	  e.printStackTrace();
	}
	return null;
}



}