package com.exampleproject.gwt.startpoint.client;

import com.exampleproject.model.shared.*;
import org.fusesource.restygwt.client.MethodCallback;
import org.fusesource.restygwt.client.RestService;
import javax.ws.rs.*;
import java.util.List;
import java.util.Map;
import java.util.Set;


public interface WorkerClient extends RestService {

	@POST
	@Path("/login")
	void isLogged(List<String> logInfo, MethodCallback<User> callback);

	@GET
	@Path("/genres")
	void selectGenres(MethodCallback<List<Genre>> callback);


	@GET
	@Path("/books")
	void selectBooks(MethodCallback<List<Book>> callback);

	@POST
	@Path("/addCustomer")
	void createCustomer(Customer customer,MethodCallback<User> callback);

	@POST
	@Path("/sort")
	void sortBooks(Map<String, String> params, MethodCallback<List<Book>> callback);

	@POST
	@Path("/canSign")
	void loginIsFree(String login, MethodCallback<Boolean> callback);

	@POST
	@Path("/cart")
	void getCart(User user, MethodCallback<Cart> callback);

	@POST
	@Path("/bookToCart")
	void addBookToCart(Map<String, Integer> params, MethodCallback<Void> callback);

	@PUT
	@Path("/addBook")
	void addBook(Book book, MethodCallback<Void> callback);

	@POST
	@Path("/bookFromCart")
	void deleteBookFromCart(Map<String, Integer> params, MethodCallback<Void> callback);

	@PUT
	@Path("/changePassword")
	void changePassword(Map<String, String> params, MethodCallback<Void> callback);

	@DELETE
	@Path("/deleteBook")
	void deleteBook(Book book, MethodCallback<Void> callback);

	@PUT
	@Path("/addAddress")
	void addAddress(Adress adress, MethodCallback<Adress> callback);

	@POST
	@Path("/customer")
	void getCustomer(User user, MethodCallback<Customer> callback);

	@POST
	@Path("/updateBook")
	void updateBook(Book book, MethodCallback<Void> callback);

	@PUT
	@Path("/order")
	void createOrder(Order order, MethodCallback<Void> callback);

	@PUT
	@Path("/cleanCart")
	void cleanCart(Cart cart, MethodCallback<Void> callback);
}
