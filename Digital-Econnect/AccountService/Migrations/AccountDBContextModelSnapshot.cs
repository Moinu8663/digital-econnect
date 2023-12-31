﻿// <auto-generated />
using System;
using AccountService.models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace AccountService.Migrations
{
    [DbContext(typeof(AccountDBContext))]
    partial class AccountDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasDefaultSchema("digital_econnect")
                .HasAnnotation("ProductVersion", "6.0.20")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("AccountService.models.account", b =>
                {
                    b.Property<int>("Account_No")
                        .HasColumnType("int");

                    b.Property<int>("Balance")
                        .HasColumnType("int");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("MobileNo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Account_No");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.ToTable("Accounts", "digital_econnect");
                });

            modelBuilder.Entity("AccountService.models.Transaction", b =>
                {
                    b.Property<int>("Transaction_Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Transaction_Id"), 1L, 1);

                    b.Property<int>("Account_No")
                        .HasColumnType("int");

                    b.Property<int>("Account_No1")
                        .HasColumnType("int");

                    b.Property<decimal>("Transaction_Amount")
                        .HasColumnType("decimal(18,2)");

                    b.Property<DateTime>("Transaction_Date")
                        .HasColumnType("datetime2");

                    b.Property<string>("Transaction_Type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Transaction_Id");

                    b.HasIndex("Account_No1");

                    b.ToTable("Transactions", "digital_econnect");
                });

            modelBuilder.Entity("AccountService.models.Transaction", b =>
                {
                    b.HasOne("AccountService.models.account", "account")
                        .WithMany()
                        .HasForeignKey("Account_No1")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("account");
                });
#pragma warning restore 612, 618
        }
    }
}
