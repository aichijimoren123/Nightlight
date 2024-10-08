package db

import (
	"context"
	"log"
	"shadcn-ad/ent"

	_ "github.com/lib/pq"
)

var client *ent.Client

// Init initializes the database client and runs the schema migration.
func Init() {
	var err error
	client, err = ent.Open("postgres", "host=127.0.0.1 port=5432 user=postgres dbname=night password=123456 sslmode=disable")
	if err != nil {
		log.Fatalf("failed opening connection to sqlite: %v", err)
	}
	// 运行自动迁移工具
	if err := client.Schema.Create(context.Background()); err != nil {
		log.Fatalf("failed creating schema resources: %v", err)
	}
}

// Client returns the database client.
func Client() *ent.Client {

	return client
}
