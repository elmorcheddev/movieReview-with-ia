package com.review.configuration;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
 import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.client.RestTemplate;

 
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private CustomUserDetailService ourUserDetailsService;
    @Autowired
    private ApplicationRequestFilter jwtAuthFIlter;
    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
    @Bean
      SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.csrf(AbstractHttpConfigurer::disable)
                .cors(Customizer.withDefaults())
                .authorizeHttpRequests(request -> request.requestMatchers("/auth/login").permitAll()
                									.requestMatchers("/utilisateur/saveAdmin").permitAll()
                									.requestMatchers("/utilisateur/saveClient").permitAll()
                									.requestMatchers("/genre/allForClient").permitAll()
                									.requestMatchers("/genre/findbyIdForClient/**").permitAll()
                									.requestMatchers("/film/allForClient").permitAll()
                									.requestMatchers("/film/byIdForClient/**").permitAll()
                									.requestMatchers("/director/byIdForClient/**").permitAll()
                									.requestMatchers("/director/allForClient").permitAll()
                									.requestMatchers("/acteur/byIdForClient/**").permitAll()
                									.requestMatchers("/acteur/allForClient").permitAll()
                									.requestMatchers("/film/bycat/**").permitAll()
                									.requestMatchers("/calandrierMovie/listForClient").permitAll()
                									.requestMatchers("/calandrierMovie/byIdForClient/**").permitAll()
                									.requestMatchers("/calandrierMovie/filmByCalandForClient/**").permitAll()
                									.requestMatchers("/calandrierMovie/filmByCalandForClient/**").permitAll()

                        .anyRequest().authenticated())
                .sessionManagement(manager -> manager.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authenticationProvider()).addFilterBefore(
                        jwtAuthFIlter, UsernamePasswordAuthenticationFilter.class
                );
        return httpSecurity.build();
    }

    @Bean
      AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();
        daoAuthenticationProvider.setUserDetailsService(ourUserDetailsService);
        daoAuthenticationProvider.setPasswordEncoder(passwordEncoder());
        return daoAuthenticationProvider;
    }

    @Bean
      BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
      AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }
}
