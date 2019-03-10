import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { environment } from '../../environments/environment';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });
  contentTypeIds = {
    brandsPage: 'brandPage'
  };
  private contentfulUrl =
    'https://cdn.contentful.com/spaces/vx4kxymiofne/entries?access_token=eb03e0eb1598a74ec6fffe865004919f2d0e99ad62653ea5a71370a34c548cf4';
  // &include=2&content_type=brandPage';

  constructor(private http: HttpClient) {}

  logItem(contentId) {
    this.client
      .getEntries(contentId)
      .then(entry => console.log('entry', entry));
  }

  getEntries(contentId, query = {}) {
    const promise = this.client.getEntries({
      content_type: contentId,
      ...query
    });
    return from(promise).pipe(map(entry => entry.items));
  }
  getEntry(contentId, query = {}) {
    const promise = this.client.getEntry(contentId, { ...query });
    return from(promise);
  }

  getBrandsPage() {
    // const promise = this.client.getEntries({
    //   content_type: this.contentTypeIds.brandsPage,
    //   include: 0,
    //   select: 'sys.id,fields.page_title'
    // });
    // return from(promise).pipe(map(entry => entry.items));
    return this.http
      .get<any>(this.contentfulUrl + '&content_type=brandPage')
      .pipe(map(entry => entry.items));
  }

  getBrandByTitle(title: string) {
    title = this.capitalize(title);
    // const promise = this.client.getEntries({
    //   content_type: this.contentTypeIds.brandsPage,
    //   include: 0,
    //   select: 'fields',
    //   // 'fields.page_title': 'Toyota'
    // });
    // return from(promise).pipe(map(entry => entry.items));

    return this.http
    .get<any>(this.contentfulUrl + '&content_type=brandPage'
    + '&select=fields'
    + '&fields.page_title=' + title
    )
    .pipe(map(entry => entry.items));

  }
  // the reason i'm using title and not sys.id is because we are passing the title in the url and not the sys.id
  capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
