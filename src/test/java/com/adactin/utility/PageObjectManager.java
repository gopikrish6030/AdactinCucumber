package com.adactin.utility;

import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.BookHotel;
import com.adactin.baseclass.BookingConfirmation;
import com.adactin.baseclass.SearchHotel;
import com.adactin.baseclass.SelectHotel;
import com.adactin.baseclass.SignInPage;

public class PageObjectManager {

	public static WebDriver driver;
	
	private SignInPage sp;
	private SearchHotel sh;
	private SelectHotel sh1;
	private BookHotel bh;
	private BookingConfirmation bc;

	public PageObjectManager(WebDriver ldriver) {

		this.driver=ldriver;
	}

	public SignInPage getSp() {
		sp = new SignInPage(driver);
		return sp;
	}

	public SearchHotel getSh() {
		sh = new SearchHotel(driver);
		return sh;
	}

	public SelectHotel getSh1() {
		sh1 = new SelectHotel(driver);
		return sh1;
	}

	public BookHotel getBh() {
		bh = new BookHotel(driver);
		return bh;
	}

	public BookingConfirmation getBc() {
		bc = new BookingConfirmation(driver);
		return bc;
	}
}
