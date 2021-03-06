package com.adactin.utility;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class ConfigurationReader {

	public static Properties ps;
	public ConfigurationReader() throws IOException {
		File f = new File("src\\test\\java\\com\\adactin\\property\\Adactin.property");
		FileInputStream fis = new FileInputStream(f);
		ps = new Properties();
		ps.load(fis);
	}
	
	public String getBrowserName() {

		String browserName = ps.getProperty("BrowserName");
		System.out.println(browserName);
		return browserName;
	}
	
	public String getURL() {

		String url = ps.getProperty("url");
		System.out.println(url);
		return url;
	}
	public static void main(String[] args) throws IOException {
		ConfigurationReader cr = new ConfigurationReader();
		cr.getBrowserName();
		cr.getURL();
	}
}
