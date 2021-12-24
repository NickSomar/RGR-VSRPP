import React from "react";
import registration from "./SignUpPage.module.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/userActions";

export function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(userActions.addNewUser(data));
    reset();
  };

  return (
    <div className={registration.page}>
      <div className={registration.body}>
        <div className={registration.content}>
          <div className={registration.close}>
            <Link to="/">
              <CloseIcon className={registration.close__item} />
            </Link>
          </div>
          <h2>Регистрация</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              Имя
              <div>
                <input
                  className={registration.input}
                  {...register("firstName", {
                    required: true,
                  })}
                />
                <div style={{ height: 20 }}>
                  {errors?.firstName && <p>Заполните поле!</p>}
                </div>
              </div>
            </label>
            <label>
              Фамилия
              <div>
                <input
                  className={registration.input}
                  {...register("lastName", {
                    required: true,
                  })}
                />
                <div style={{ height: 20 }}>
                  {errors?.lastName && <p>Заполните поле!</p>}
                </div>
              </div>
            </label>
            <label>
              Почта
              <div>
                <input
                  className={registration.input}
                  {...register("email", {
                    required: "Заполните поле!",
                    pattern: {
                      value: /[A-Za-z]{3}/,
                      message: "Нужно использовать латинские символы",
                    },
                  })}
                />
                <div style={{ height: 20 }}>
                  {errors?.email && <p>{errors?.email.message || "Ошибка!"}</p>}
                </div>
              </div>
            </label>
            <label>
              Пароль
              <div>
                <input
                  className={registration.input}
                  type="password"
                  {...register("password", {
                    required: true,
                    pattern: {
                      value: /[A-Za-z]{3}/,
                      message: "Нужно использовать латинские символы",
                    },
                    minLength: {
                      value: 8,
                      message: "Нужно минимум 8 символов",
                    },
                  })}
                />
                <div style={{ height: 20 }}>
                  {errors?.password && (
                    <p>{errors?.password.message || "Заполните поле!"}</p>
                  )}
                </div>
              </div>
            </label>
            <button type="submit">Регистрация</button>
          </form>
        </div>
      </div>
    </div>
  );
}
