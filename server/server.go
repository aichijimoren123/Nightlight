package main

import (
	"context"
	"shadcn-ad/middleware"
	db "shadcn-ad/model"

	"github.com/gofiber/fiber/v2"
)

func main() {
	db.Init()
	app := fiber.New()

	app.Use(middleware.Logger())

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	client := db.Client()

	app.Post("/register", func(c *fiber.Ctx) error {
		user, err := client.User.Create().SetID(1).Save(context.Background())
		if err != nil {
			return c.Status(200).JSON(fiber.Map{
				"message": "failed to create user",
			})
		}
		return c.Status(200).JSON(fiber.Map{
			"message": "user created",
			"user":    user,
		})
	})

	app.Listen(":3000")
}
