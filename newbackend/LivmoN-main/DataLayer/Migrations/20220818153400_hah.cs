using Microsoft.EntityFrameworkCore.Migrations;

namespace DataLayer.Migrations
{
    public partial class hah : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "514d0ec2-57d9-460b-ad3c-c19441f8d09a");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5fdd0ec2-8976-4dcb-a8b6-863c20ce2e93");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "686a13ec-1486-4b56-95fa-55cfbedbb461");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "dfef9247-6347-4c91-b666-1f1fcb1ad91f");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "bce35bf6-727f-46cd-a2ae-8c73577c250c", "b12e3803-6820-4de7-a145-029b95134a78", "Adminisatrateur", "ADMINISTRATEUR" },
                    { "93d7c1a3-c936-4168-b7a7-2ea1a853aac3", "d4ebdd33-f32d-4669-b91d-07d4b0ca8c89", "Host", "HOST" },
                    { "ca1161f3-9413-495b-a9f8-1dee987cd2da", "e5913cf2-6c93-4ac4-850e-a6e87cb6e4ec", "Client", "CLIENT" },
                    { "b0d5f8ea-ae22-49a8-895d-7fd009a4cd09", "b8cd36be-c2df-4556-ba43-a5ba3fb2a4e8", "Commercant", "COMMERCANT" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "93d7c1a3-c936-4168-b7a7-2ea1a853aac3");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b0d5f8ea-ae22-49a8-895d-7fd009a4cd09");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "bce35bf6-727f-46cd-a2ae-8c73577c250c");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ca1161f3-9413-495b-a9f8-1dee987cd2da");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "dfef9247-6347-4c91-b666-1f1fcb1ad91f", "228f8501-bdd8-4b7c-b606-2d05f6dbbc0c", "Adminisatrateur", "ADMINISTRATEUR" },
                    { "514d0ec2-57d9-460b-ad3c-c19441f8d09a", "1df11cb2-82c1-4bc5-86fe-76f6789b94a9", "Host", "HOST" },
                    { "686a13ec-1486-4b56-95fa-55cfbedbb461", "f2bcfc10-885b-43b3-bcb8-38c87d993d31", "Client", "CLIENT" },
                    { "5fdd0ec2-8976-4dcb-a8b6-863c20ce2e93", "36010bc6-3bd0-41f1-8f0e-7dcbf0f75669", "Commercant", "COMMERCANT" }
                });
        }
    }
}
