import { inject, async, TestBed } from '@angular/core/testing';
import { platformBrowser } from '@angular/platform-browser';
import { Http, BaseRequestOptions, XHRBackend, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { ApiService } from '../../../shared/services/api/api.service';
import { SessionHandlingService } from '../../../shared/services/session-handling/session-handling.service';
import { CacheService } from 'ng2-cache/ng2-cache';


import { StateMapComponent } from './state-map.component';
import { FundService } from '../../services/fund/fund.service'

import { Fund } from '../../types/fund.type';


describe('StateMapComponent', () => {

  let MOCK_API = jasmine.createSpyObj('api',  ['getBeneficiariesParams', 'putBeneficiariesParams']);
  let MOCK_CACHE = jasmine.createSpyObj('cacheService', ['get', 'set']);
  let MOCK_SESSION = jasmine.createSpyObj('session', ['getItem']);

  let MOCK_GET_BENEFICIARIES_PARAMS_RESPONSE = {
    url: 'http://www.greatwest.com',
    json: '{foo: 1}',
    requestOptions: null
  };
  let MOCK_PUT_BENEFICIARIES_PARAMS_RESPONSE = {
    url: 'http://www.greatwest.com',
    json: '{foo: 1}',
    requestOptions: null
  };
  let MOCK_ROUTER = {};
  let MOCK_ACTIVATEDROUTE = {};
  const allFunds = [
    { fundName: 'Sample fund 1', fundNumber: '3', assetClass: 'A' },
    { fundName: 'Sample fund 2', fundNumber: '2', assetClass: 'C' },
    { fundName: 'Sample fund 3', fundNumber: '1', assetClass: 'B' }
  ];

  let fixture;
  let component;

  beforeEach((done) => {
    TestBed.configureCompiler({
      providers: [
      {
        provide: StateMapComponent,
        useClass: StateMapComponent
      },{
        provide: FundService,
        useClass: FundService
      },{
        provide: MockBackend,
        useClass: MockBackend
      },{
        provide: BaseRequestOptions,
        useClass: BaseRequestOptions
      }, {
        provide: Http,
        deps: [
          MockBackend,
          BaseRequestOptions
        ],
        useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backend, defaultOptions);
        }
      }, {
        provide: ApiService,
        useValue: MOCK_API
      }, {
        provide: CacheService,
        useValue: MOCK_CACHE
      },{
        provide: SessionHandlingService,
        useValue: MOCK_SESSION
      }]
    });

    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting()).configureTestingModule({
      declarations: [StateMapComponent]
    });
    TestBed.overrideComponent(StateMapComponent, {
      set: {
        template: '<div></div>'
      }
    }).compileComponents()
      .then(done);
  });
});
