package com.redmaxx.login.config.security.auth;

import com.redmaxx.login.model.Role;
import com.redmaxx.login.model.User;
import com.redmaxx.login.repository.UserRepository;
import com.redmaxx.login.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse register(RegisterRequest request){
        var user= User.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .key(passwordEncoder.encode(request.getKey()))
                .role(Role.USER)
                .build();

        userRepository.save(user);
        var jwToken= jwtService.generateToken(user);

        return AuthenticationResponse.builder()
                .token(jwToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request){
        System.out.println(request);
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getKey()
                )
        );
        System.out.println("here");
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();

        var jwToken= jwtService.generateToken(user);

        return AuthenticationResponse.builder()
                .token(jwToken)
                .build();
    }
}
