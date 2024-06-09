import { TestBed } from '@angular/core/testing';

import { LoginService } from '../login/login.service';
import { User } from '../../intefaces/users';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('LoginService', () => {
  let service: LoginService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService]
    });
    service = TestBed.inject(LoginService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
  it('should return users', () => {
    const mockUsers: User[] = [
      { id: 1, username: 'user1', role: 'admin',key:'@#$' },
      { id: 2, username: 'user2', role: 'user',key:'¨%$' }
    ];

    service.getAll().subscribe(users => {
      expect(users.length).toBe(2);
      expect(users).toEqual(mockUsers);
    });

    const req = httpMock.expectOne('/api/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });
});



// describe('LoginService', () => {
//   let service: LoginService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(LoginService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
