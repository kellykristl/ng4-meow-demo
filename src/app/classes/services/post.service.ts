import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {BaseService} from "./base-service";
import {Post} from "../classes/post";
import {Status} from "../classes/status";

@Injectable()
export class RsvpService extends BaseService {
	constructor(protected http: Http) {
		super(http);
	}

	private rsvpUrl = "api/post/";
}