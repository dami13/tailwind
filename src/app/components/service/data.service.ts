import { HttpClient } from "@angular/common/http";
import { PersonModel } from "../model/person.model";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class DataService {
    private readonly URL = 'localhost:8080';

    constructor(private http: HttpClient) {}

    post(person: PersonModel[]) {
        return this.http.post(this.URL, person);
    }
}
