package com.example.application.endpoints.helloreact;

import java.time.LocalDate;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import dev.hilla.Nonnull;
import jakarta.annotation.Nullable;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Endpoint
@AnonymousAllowed
public class FormEndpoint {

    public Entity sendEntity(@Nonnull Entity entity) {
        return entity;
    }

    static public class Entity {
        @Nullable
        public LocalDate date;

        @NotNull
        @NotBlank
        public String name;

        @Min(1)
        public int number;

        @NotNull
        @NotBlank
        public String choice;
    }
}