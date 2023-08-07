using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AccountService.Migrations
{
    public partial class db : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "digital_econnect");

            migrationBuilder.CreateTable(
                name: "Accounts",
                schema: "digital_econnect",
                columns: table => new
                {
                    Account_No = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Balance = table.Column<int>(type: "int", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MobileNo = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Accounts", x => x.Account_No);
                });

            migrationBuilder.CreateTable(
                name: "Transactions",
                schema: "digital_econnect",
                columns: table => new
                {
                    Transaction_Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Account_No = table.Column<int>(type: "int", nullable: false),
                    Transaction_Amount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Transaction_Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Transaction_Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Account_No1 = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Transactions", x => x.Transaction_Id);
                    table.ForeignKey(
                        name: "FK_Transactions_Accounts_Account_No1",
                        column: x => x.Account_No1,
                        principalSchema: "digital_econnect",
                        principalTable: "Accounts",
                        principalColumn: "Account_No",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Accounts_Email",
                schema: "digital_econnect",
                table: "Accounts",
                column: "Email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Transactions_Account_No1",
                schema: "digital_econnect",
                table: "Transactions",
                column: "Account_No1");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Transactions",
                schema: "digital_econnect");

            migrationBuilder.DropTable(
                name: "Accounts",
                schema: "digital_econnect");
        }
    }
}
