package controllers;

import java.util.*;

import models.User;
import play.*;
import play.mvc.*;
import views.html.*;

public class Application extends Controller {

    public static Result index() {
    	HashMap hm = User.get_all_communications();
        return ok(index.render(User.find.all(), hm));
    }

}
