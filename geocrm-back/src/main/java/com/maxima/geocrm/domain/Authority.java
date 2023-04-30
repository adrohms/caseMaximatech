package com.maxima.geocrm.domain;

import java.io.Serializable;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * An authority (a security role) used by Spring Security.
 */
@Entity
@Table(name = "max_authority")
public class Authority implements Serializable {

    private static final long serialVersionUID = 1L;

    @NotNull
    @Size(max = 50)
    @Id
    @Column(name = "permission_name", length = 50)
    private String permissionName;

    public String getPermissionName() {
        return permissionName;
    }

    public void setPermissionName(String permissionName) {
        this.permissionName = permissionName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Authority)) {
            return false;
        }
        return Objects.equals(permissionName, ((Authority) o).permissionName);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(permissionName);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Authority{" +
            "name='" + permissionName + '\'' +
            "}";
    }
}
